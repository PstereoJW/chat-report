import {
  EKeywords,
  FirstPageData,
  Keyword,
  keywordArr,
  MessageType,
  OriginMessages,
  SecondPageData,
  TimePeriodMap,
} from "../type";
//@ts-ignore
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

export const firstPageData: FirstPageData = {
  allCounts: annualMessages.length,
  emoji: annualMessages.filter(
    (message) => message.m_uiMessageType === MessageType.emoji
  ).length,
  originEmoji: annualMessages.filter((message) =>
    message.m_nsContent.includes("[")
  ).length,
  keyword,
};

const filterHours = (message: any, startHour: number, endHour: number) =>
  dayjs.unix(message.m_uiCreateTime).hour() >= startHour &&
  dayjs.unix(message.m_uiCreateTime).hour() <= endHour;

export const HoursData: any = {};
HoursData[TimePeriodMap.night] = annualMessages.filter((message) =>
  filterHours(message, 20, 23)
).length;
HoursData[TimePeriodMap.earlyMorning] = annualMessages.filter((message) =>
  filterHours(message, 0, 6)
).length;
HoursData[TimePeriodMap.morning] = annualMessages.filter((message) =>
  filterHours(message, 7, 11)
).length;
HoursData[TimePeriodMap.noon] = annualMessages.filter((message) =>
  filterHours(message, 12, 16)
).length;
HoursData[TimePeriodMap.afternoon] = annualMessages.filter((message) =>
  filterHours(message, 17, 19)
).length;

export const secondPageData: SecondPageData = Object.keys(HoursData)
  .sort((a, b) => HoursData[a] - HoursData[b])
  .reduce((SecondPageData: SecondPageData, key: any) => {
    //@ts-ignore
    SecondPageData[key] = `${
      ((HoursData[key] / annualMessages.length).toFixed(
        2
      ) as unknown as number) * 100
    }%`;
    return SecondPageData;
  }, {} as SecondPageData);

console.log(HoursData);
