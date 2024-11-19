import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiArrowUpRight,
  HiCalendarDays,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiEnvelope,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiInformationCircle,
  HiMiniGlobeAsiaAustralia,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineLink,
} from "react-icons/hi2";
import {
  PiBookBookmarkDuotone,
  PiGridFourDuotone,
  PiHouseDuotone,
  PiImageDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";

import { IconType } from "react-icons";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  arrowUpRight: HiArrowUpRight,
  check: HiCheck,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  email: HiEnvelope,
  globe: HiMiniGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  code: HiOutlineArrowPath, // Changed from FaTerminal to HiOutlineArrowPath
  terminalIcon: HiOutlineArrowPath, // Changed from FaTerminal to HiOutlineArrowPath
  book: PiBookBookmarkDuotone,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
};
