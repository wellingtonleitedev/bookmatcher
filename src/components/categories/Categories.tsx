import React from "react";
import Image from "next/image";
import { List } from "./Categories.style";

import FrontIcon from "@/assets/icons/front-end.png";
import BackIcon from "@/assets/icons/backend.png";
import DevOpsIcon from "@/assets/icons/devops.png";
import DBAIcon from "@/assets/icons/database.png";
import QAIcon from "@/assets/icons/testing.png";
import ArchIcon from "@/assets/icons/architecture.png";
import SecurityIcon from "@/assets/icons/cyber-security.png";
import UXIcon from "@/assets/icons/ux.png";

const Categories: React.FC = () => {
  return (
    <List className="u-hide-scrollbar">
      <li>
        <figure>
          <Image src={FrontIcon} alt="" />
        </figure>
        <figcaption>Front-end</figcaption>
      </li>
      <li>
        <figure>
          <Image src={BackIcon} alt="" />
        </figure>
        <figcaption>Back-end</figcaption>
      </li>
      <li>
        <figure>
          <Image src={DevOpsIcon} alt="" />
        </figure>
        <figcaption>DevOps</figcaption>
      </li>
      <li>
        <figure>
          <Image src={DBAIcon} alt="" />
        </figure>
        <figcaption>DBA</figcaption>
      </li>
      <li>
        <figure>
          <Image src={QAIcon} alt="" />
        </figure>
        <figcaption>QA</figcaption>
      </li>
      <li>
        <figure>
          <Image src={ArchIcon} alt="" />
        </figure>
        <figcaption>Architecture</figcaption>
      </li>
      <li>
        <figure>
          <Image src={SecurityIcon} alt="" />
        </figure>
        <figcaption>Cyber Security</figcaption>
      </li>
      <li>
        <figure>
          <Image src={UXIcon} alt="" />
        </figure>
        <figcaption>UX/UI</figcaption>
      </li>
    </List>
  );
};

export default Categories;
