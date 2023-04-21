import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";
import { getTotalJobs } from "../features/allJobs/allJobsSlice";

function TotalJobsContainer() {
  const {
    allJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (allJobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{allJobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {allJobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default TotalJobsContainer;
