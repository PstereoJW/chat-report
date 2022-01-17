import {
  EKeywords,
  FirstPageData,
  Keyword,
  keywordArr,
  MessageType,
  OriginMessages,
} from "../type";
import data from "./message.js";
import dayjs from "dayjs";

const { message: allMessages } = data as OriginMessages;

const annualMessages = allMessages.filter(
  (message) =>
    dayjs.unix(message.m_uiCreateTime).isAfter(dayjs("2021-01-01")) &&
    dayjs.unix(message.m_uiCreateTime).isBefore(dayjs("2022-01-01"))
);

const keyword = annualMessages.reduce((keywords, message) => {
  const currKeywords: EKeywords[] = [];
  keywordArr.forEach((keyword) => {
    if (message.m_nsContent.includes(keyword)) {
      currKeywords.push(keyword);
    }
  });
  currKeywords.forEach((keyword) => {
    keywords[keyword] = keywords[keyword] ? keywords[keyword] + 1 : 1;
  });
  return keywords;
}, {} as Keyword);

export const firstPage: FirstPageData = {
  allCounts: annualMessages.length,
  emoji: annualMessages.filter(
    (message) => message.m_uiMessageType === MessageType.emoji
  ).length,
  originEmoji: annualMessages.filter((message) =>
    message.m_nsContent.includes("[")
  ).length,
  keyword,
};
