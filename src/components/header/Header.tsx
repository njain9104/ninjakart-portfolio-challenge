import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import Button from "../button/Button";
import "./header.css";

type SiteProps = {
  id: string | number;
  name: string;
  link: string;
  upvotes: number;
};

type HeaderProps = {
  name: string;
  sites: Array<SiteProps>;
  onUpvote: any;
  onSort: any;
};

const Headers: FC<HeaderProps> = (props) => {
  const { name, sites, onUpvote, onSort } = props;

  const [siteList, setSiteList] = useState([...sites]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSiteList([...sites]);
  }, [sites]);

  const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onUpvoteClick = (e: MouseEvent<HTMLButtonElement>) => {
    const updatedSites = siteList.map((site) => {
      if (site.name === e.currentTarget.name)
        return { ...site, upvotes: site.upvotes + 1 };
      return site;
    });
    onUpvote([...updatedSites], name);
  };

  const onSortByUpvotes = () => {
    const sortedSiteList = [...siteList];
    sortedSiteList.sort((a, b) => a.upvotes - b.upvotes);
    onSort([...sortedSiteList]);
  };

  const filteredSites = siteList.filter((site) =>
    site.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="sites-container">
      <div className="sites-header">
        <h1>{name}</h1>
        <div className="sort-upvotes">
          <Button
            name="sort"
            text="Sort by Upvotes"
            onClick={onSortByUpvotes}
          />
        </div>
        <div className="search-name">
          <input
            type="text"
            name="searchByName"
            value={searchInput}
            onChange={onSearchInput}
            placeholder="Search by name"
          />
        </div>
      </div>
      <div className="sites">
        {filteredSites.map((site) => (
          <div className="site" key={site.id}>
            <div className="site-details">
              <div>{site.name}</div>
              <div>Upvotes: {site.upvotes}</div>
            </div>
            <iframe
              height="400"
              width="450"
              title={site.name}
              src={site.link}
            />
            <div>
              <Button
                name={site.name}
                text="UPVOTE"
                onClick={onUpvoteClick}
                variant="upvoteBtn"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headers;
