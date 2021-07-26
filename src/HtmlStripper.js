import React from 'react';


const RepeatedWords = (value) => {
  try {
    var wordCounts = {};
    var words = value.replace(/(<([^>]+)>)/gi, '');
    words = words.replace(/(\r\n|\n|\r)/gm, "");
    words = words.replace(/[^\w\s]/gi, '');
    words = words.split(/\b/).map(function (item) {
      if (item.trim() !== '')
        return item.trim()

    });

    words = words.filter(function (element) {
      return element !== undefined;
    });

    for (var i = 0; i < words.length; i++)
      wordCounts["" + words[i]] = (wordCounts["" + words[i]] || 0) + 1;


    return Object.entries(words).sort(([, a], [, b]) => b - a).slice(0, 10);
  } catch (error) {
    throw error;
  }

}


class HtmlStripper extends React.Component {

  constructor(props) {
    super(props);
    this.state.url = this.state.url + this.props.url;
  }

  state = {
    url: 'https://cors-anywhere.herokuapp.com/',
    repeatedWords: [],
    imagesUrls: []
  }

  componentDidMount() {

    fetch(this.state.url, { header: { 'X-Requested-With': 'XMLHttpRequest', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0' } })
      .then(
        data => data.text(),
        data => {
          console.log(data);
          this.setState({ repeatedWords: [], imagesUrls: [] })
        }
      )
      .then(text => {

        const parser = new DOMParser();
        var baseUrl = this.props.url.match('^https?:\/\/[^#?\/]+');

        var doc = parser.parseFromString(text, "text/html");

        var body = doc.getElementsByTagName('body')[0].innerHTML;


        var bodyWithoutScripts = '';
        var re = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        bodyWithoutScripts = body.replace(re, "");

        var repeated = RepeatedWords(bodyWithoutScripts);

        var imagesDoc = doc.getElementsByTagName('img');

        var srcList = [];
        if (imagesDoc != null)
          for (var i = 0; i < imagesDoc.length; i++) {

            if (imagesDoc[i].src.includes('localhost')) {
              srcList.push(baseUrl + '/' + imagesDoc[i].src.replace(window.location.protocol + '//' + window.location.host, ''));
            }
            else
              srcList.push(imagesDoc[i].src);

          }

        this.setState({ repeatedWords: repeated, imagesUrls: srcList });
        console.log(repeated);
        console.log(srcList);
      })
      .catch((error) => {
        console.log(error.message)
        this.setState({ repeatedWords: [], imagesUrls: [] })
      });
  }

  render() {

    return (
      <div className="container">

        <h4 style={{ width: '100%', wordBreak: 'break-word' }}>{this.props.url}</h4>
        <hr />
        <p>Top 10 repeated words</p>
        <ol style={{ width: '100%' }}>
          {
            this.state.repeatedWords.length ? this.state.repeatedWords.map((item, index) => <li key={index}>{item[1]}</li>) : <li>no items listed yet</li>
          }
        </ol>
        <hr />
        <p>List of all images inported from the suplied URL</p>
        <ol style={{ overflow: 'hidden', overflowY: 'scroll', width: '100%', minHeight: '200px', maxHeight: '500px' }}>
          {
            this.state.imagesUrls.length ? this.state.imagesUrls.map((url, index) => <li key={index}><img src={url} style={{ width: '100%', textAlign: 'center', margin: 'auto' }}></img></li>) : <li>no images listed yet</li>
          }
        </ol>

      </div>
    );
  }
}

export default HtmlStripper;

