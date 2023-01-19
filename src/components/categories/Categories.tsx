import React from 'react';
import Image from 'next/image';
import { List } from './Categories.style';

import FrontIcon from '../../assets/icons/front-end.png'
import BackIcon from '../../assets/icons/backend.png'
import DevOpsIcon from '../../assets/icons/devops.png'
import DBAIcon from '../../assets/icons/database.png'
import QAIcon from '../../assets/icons/testing.png'
import ArchIcon from "../../assets/icons/architecture.png";
import SecurityIcon from '../../assets/icons/cyber-security.png'
import UXIcon from "../../assets/icons/ux.png";

const Categories: React.FC = () => {
  return (
    <List>
      <li>
        <Image src={FrontIcon} alt="13" width={45} height={45} priority />
        Front-end
      </li>
      <li>
        <Image src={BackIcon} alt="13" width={45} height={45} priority />
        Back-end
      </li>
      <li>
        <Image src={DevOpsIcon} alt="13" width={45} height={45} priority />
        DevOps
      </li>
      <li>
        <Image src={DBAIcon} alt="13" width={45} height={45} priority />
        DBA
      </li>
      <li>
        <Image src={QAIcon} alt="13" width={45} height={45} priority />
        QA
      </li>
      <li>
        <Image src={ArchIcon} alt="13" width={45} height={45} priority />
        Architecture
      </li>
      <li>
        <Image src={SecurityIcon} alt="13" width={45} height={45} priority />
        Cyber Security
      </li>
      <li>
        <Image src={UXIcon} alt="13" width={45} height={45} priority />
        UX/UI
      </li>
    </List>
  );
}

export default Categories;