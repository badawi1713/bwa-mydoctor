import React from 'react';
import IsMeDialogue from './IsMeDialogue';
import OtherDialogue from './OtherDialogue';

const ChatDialogue = ({isMe}) => {
  if (isMe) {
    return <IsMeDialogue />;
  }
  return <OtherDialogue />;
};

export default ChatDialogue;
