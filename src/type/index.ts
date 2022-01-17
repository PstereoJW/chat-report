export type Message = {
  m_nsFromUsr: string;
  m_uiMesLocalID: number;
  m_nsToUsr: string;
  m_uiCreateTime: number;
  m_uiMessageType: MessageType;
  m_nsRealChatUsr: string;
  m_uiMesSvrID: number;
  m_nsContent: string;
};

export enum MessageType {
  "text" = 1,
  "emoji" = 47,
}

export type OriginMessages = {
  message: Message[];
};

export enum EKeywords {
  "goodNight" = "晚安",
  "cat" = "猫",
  "food" = "炒米粉",
  "hot" = "火锅",
  "look" = "好看",
}

export type Keyword = {
  [EKeywords.cat]: number;
  [EKeywords.food]: number;
  [EKeywords.goodNight]: number;
  [EKeywords.hot]: number;
  [EKeywords.look]: number;
};

export const keywordArr = [
  EKeywords.goodNight,
  EKeywords.cat,
  EKeywords.food,
  EKeywords.hot,
  EKeywords.look,
];

export type FirstPageData = {
  allCounts: number;
  emoji: number;
  originEmoji: number;
  keyword: Keyword;
};

export enum TimePeriodMap {
  "night" = "深夜", //20->24
  "earlyMorning" = "凌晨", //0>6
  "morning" = "早晨", //7->11
  "noon" = "中午", //11->17
  "afternoon" = "傍晚", //17->20
}

export const TimePeriod = {
  night: [],
};
