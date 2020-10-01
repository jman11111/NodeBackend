import React, { Component } from "react";
import Header from "./header";
import ThumbnailCard from "./thumbnailcard";
import Paginator from "./pagination";
import { paginate } from "./../util/paginate";

class Sculptures extends Component {
  state = {
    pageSize: 2,
    currentPage: 1,
    sculptures: [
      { name: "Yogo", year: "2019", description: "Test desc", tags: ["front"] },
      { name: "Hero", year: "2019", description: "Test desc", tags: ["front"] },
      { name: "Snake", year: "2019", description: "Test desc", tags: ["back"] },
      { name: "Ogre", year: "2019", description: "Test desc", tags: ["front"] },
      { name: "Mage", year: "2020", description: "Test desc", tags: ["side"] },
      { name: "Eye", year: "2020", description: "Test desc", tags: ["front"] },
    ],
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const count = this.state.sculptures.length;
    const { pageSize, currentPage, sculptures: allSculptures } = this.state;
    const sculptures = paginate(allSculptures, currentPage, pageSize);
    return (
      <div>
        <Header>Sculptures</Header>
        <ul>
          {sculptures.map((sculpture) => {
            return (
              <ThumbnailCard
                key={sculpture.name}
                name={sculpture.name}
                year={sculpture.year}
                description={sculpture.description}
              />
            );
          })}
        </ul>
        <Paginator
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Sculptures;
