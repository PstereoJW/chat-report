import { OriginMessages } from "../type";
import data from "./message";
import dayjs from "dayjs";

const { message: allMessages } = data as OriginMessages;

const annualMessages = allMessages.filter(
  (message) =>
    dayjs(message.m_uiCreateTime).isAfter(dayjs("2021-01-01")) &&
    dayjs(message.m_uiCreateTime).isBefore(dayjs("2022-01-01"))
);
