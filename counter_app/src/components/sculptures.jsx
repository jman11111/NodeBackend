import React, { Component } from "react";
import Header from "./common/header";
import ThumbnailCard from "./common/thumbnailcard";
import Paginator from "./common/pagination";
import { paginate } from "./../util/paginate";
import ListGroup from "./common/listGroup";
import SortBy from "./common/sortBy";
import _ from "lodash";
import GridGenerator from "./common/gridGenerator";
import SearchForm from "./common/searchForm";
import axios from "axios";

class Sculptures extends Component {
  state = {
    pageSize: 6,
    currentPage: 1,
    sculptures: [],
    years: [],
    selectedYear: { name: "All Time" },
    sortOptions: [],
    searchPhrase: "",
    selectedSortOption: { path: "", order: "" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (currentSortOption) => {
    this.setState({ selectedSortOption: currentSortOption });
  };

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year, currentPage: 1 });
  };

  async componentDidMount() {
    const { data: posts } = await axios.get();
    this.setState({
      years: [{ name: "All Time" }, ...this.getYears()],
      sortOptions: [...this.getSortOptions()],
      sculptures: this.getSculptures(),
    });
  }

  getYears() {
    return [
      { _id: "2019", name: "2019" },
      { _id: "2020", name: "2020" },
    ];
  }

  getSortOptions() {
    return [
      { path: "year", order: "asc" },
      { path: "description", order: "asc" },
      { path: "name", order: "asc" },
    ];
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    //returns response object that you can destructure, data here has what we want right now.
    const { data: post } = await axios.post("endpoint", obj);
    const posts = [post, ...this.state.sculptures];
    this.setState({ sculptures: posts });
  };

  getSculptures() {
    // const {data: posts} = await axios.get();
    return [
      {
        name: "Yogo",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "A real swell guy",
        tags: ["front"],
      },
      {
        name: "Hero",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Being the best he can be",
        tags: ["front"],
      },
      {
        name: "Snake",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Slithering around",
        tags: ["back"],
      },
      {
        name: "Ogre",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Large and in charge",
        tags: ["front"],
      },
      {
        name: "Mage",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "Magic man",
        tags: ["side"],
      },
      {
        name: "Eye",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "just an eye",
        tags: ["front"],
      },
      {
        name: "Yogon",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "A real swellt guy",
        tags: ["front"],
      },
      {
        name: "Heron",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Being the best he can bet",
        tags: ["front"],
      },
      {
        name: "Snaken",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Slithering aroundt",
        tags: ["back"],
      },
      {
        name: "Ogren",
        image: "",
        year: { _id: "2019", name: "2019" },
        description: "Large and in charget",
        tags: ["front"],
      },
      {
        name: "Magen",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "Magic mant",
        tags: ["side"],
      },
      {
        name: "Eyen",
        image: "",
        year: { _id: "2020", name: "2020" },
        description: "just an eyet",
        tags: ["front"],
      },
    ];
  }

  handleSearchSubmit = (searchphrase) => {
    //Call server to submit login
    //redirect to logged in page
    this.setState({ searchPhrase: searchphrase });
    console.log(searchphrase, "Submitted");
  };

  getPagedData = () => {
    const {
      selectedYear,
      sculptures: allSculptures,
      selectedSortOption,
      currentPage,
      pageSize,
      searchPhrase,
    } = this.state;
    const fromYear =
      selectedYear && selectedYear._id
        ? allSculptures.filter(
            (sculpture) => sculpture.year.name === selectedYear.name
          )
        : allSculptures;

    const searchResults =
      searchPhrase === ""
        ? fromYear
        : fromYear.filter((sculpture) => {
            const re = new RegExp(searchPhrase.toLowerCase());
            return re.test(sculpture.name.toLowerCase());
          });

    const sorted = _.orderBy(
      searchResults,
      [selectedSortOption.path],
      [selectedSortOption.order]
    );
    const count = sorted.length;
    const sculptures = paginate(sorted, currentPage, pageSize);

    return { totalcount: count, sculptures };
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedSortOption,
      sortOptions,
      selectedYear,
      years,
    } = this.state;

    const { totalcount, sculptures } = this.getPagedData();

    return (
      <div>
        <Header>Sculptures</Header>
        <div className="container">
          <div className="row my-row">
            <SearchForm onSearchSubmit={this.handleSearchSubmit} />
            <SortBy
              className="col-10"
              onSort={this.handleSort}
              sortOptions={sortOptions}
              selectedSortOption={selectedSortOption}
            />
          </div>
          <div className="row my-row">
            <div className="col-2">
              <ListGroup
                items={years}
                onItemSelect={this.handleYearSelect}
                selectedItem={selectedYear}
              ></ListGroup>
            </div>
            <div className="col-10">
              <ul className="container">
                <GridGenerator cols={3}>
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
                </GridGenerator>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <Paginator
              itemsCount={totalcount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sculptures;
