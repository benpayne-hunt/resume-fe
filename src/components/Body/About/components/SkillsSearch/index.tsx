import React, { ReactElement, useState } from "react";

import CodeSightButton from "../../../../../widgets/Buttons/CodeSightButton";
import SearchBar from "../../../../../widgets/SearchBar";
import { CodeData } from "../../../../../types/codeData";
import { Skill } from "../../../../../types/skill";
import { callAPI } from "../../../../../functions/requests/callAPI";
import "./SkillsSearch.css";

type Props = {
  scrollTo: () => void;
};

const SkillsSearch = ({ scrollTo }: Props): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchSkills = async (value: string): Promise<Skill[] | []> => {
    return await callAPI("node", "skill", { name: value }, "POST");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleFocus = async (event: React.FocusEvent<HTMLInputElement>): Promise<Skill[] | []> => {
    scrollTo();

    if (event.target.value === "") {
      return await callAPI("node", "skills");
    } else {
      return [];
    }
  };

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<Skill[] | []> => {
    if (event.key === "Enter") {
      return await searchSkills(searchValue);
    } else {
      return [];
    }
  };

  const handleClick = async (): Promise<CodeData> => {
    return await callAPI("node", "code-sight/skills-search", {});
  };

  return (
    <>
      <h6 className="About-text">Think I could be a good fit? Search a skill to see if it's a match 🚀</h6>
      <div className="SkillsSearch">
        <SearchBar
          onChange={handleChange}
          onFocus={handleFocus}
          onEnter={handleEnter}
          placeholder="Search a skill your org needs!"
        />
        <div className="SkillsSearch-codeSight">
          <CodeSightButton onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default SkillsSearch;
