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
  "gif" = 47,
}

export type OriginMessages = {
  message: Message[];
};
