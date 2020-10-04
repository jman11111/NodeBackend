import React, { Component } from "react";
import Header from "./header";
import ThumbnailCard from "./thumbnailcard";
import Paginator from "./pagination";
import { paginate } from "./../util/paginate";
import ListGroup from "./listGroup";

class Sculptures extends Component {
  state = {
    pageSize: 2,
    currentPage: 1,
    sculptures: [],
    years: [],
    selectedYear: null,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year, currentPage: 1 });
  };

  componentDidMount() {
    this.setState({
      years: [{ name: "All Time" }, ...this.getYears()],
      sculptures: this.getSculptures(),
    });
  }

  getYears() {
    return [
      { _id: "2019", name: "2019" },
      { _id: "2020", name: "2020" },
    ];
  }

  getSculptures() {
    return [
      {
        name: "Yogo",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Test desc",
        tags: ["front"],
      },
      {
        name: "Hero",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Test desc",
        tags: ["front"],
      },
      {
        name: "Snake",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Test desc",
        tags: ["back"],
      },
      {
        name: "Ogre",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Test desc",
        tags: ["front"],
      },
      {
        name: "Mage",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "Test desc",
        tags: ["side"],
      },
      {
        name: "Eye",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "Test desc",
        tags: ["front"],
      },
    ];
  }

  render() {
    const {
      pageSize,
      currentPage,
      selectedYear,
      sculptures: allSculptures,
    } = this.state;
    const filtered =
      selectedYear && selectedYear._id
        ? allSculptures.filter(
            (sculpture) => sculpture.year.name === selectedYear.name
          )
        : allSculptures;
    const count = filtered.length;
    const sculptures = paginate(filtered, currentPage, pageSize);

    return (
      <div>
        <Header>Sculptures</Header>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.years}
              onItemSelect={this.handleYearSelect}
              selectedItem={this.state.selectedYear}
            ></ListGroup>
          </div>
          <ul className="col">
            {sculptures.map((sculpture) => {
              return (
                <ThumbnailCard
                  key={sculpture.name}
                  name={sculpture.name}
                  year={sculpture.year.name}
                  description={sculpture.description}
                />
              );
            })}
          </ul>
        </div>
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
