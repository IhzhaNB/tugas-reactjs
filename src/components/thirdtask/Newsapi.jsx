import React, { Component } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

class Newsapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      error: null,
      searchTerm: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchData("Popular");
  }

  fetchData(searchTerm) {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-02-22&sortBy=popularity&apiKey=9e34af2d52d84141ab2f40e46ce31891`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  handleSearch(event) {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.fetchData(searchTerm);
  }

  render() {
    const { isLoading, articles, error, searchTerm } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <>
        <Container
          style={{
            width: "400px",
            margin: "10px auto 0",
            padding: "10px",
          }}
        >
          <Form className="d-flex" onSubmit={this.handleSearch}>
            <Form.Control
              className="me-2"
              type="text"
              aria-label="Search"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) =>
                this.setState({ searchTerm: event.target.value })
              }
            ></Form.Control>
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
          </Form>
        </Container>
        <Container>
          <Row>
            {articles.map((article) => (
              <Col className="md-4 my-5">
                <Card style={{ width: "18rem" }} key={article.title}>
                  <Card.Img variant="top" src={article.urlToImage} />
                  <Card.Body>
                    <Card.Title>{article.image}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <a href={article.url}>Show Detail</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Newsapi;
