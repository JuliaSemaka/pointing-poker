import { IChatMessage } from "../../components/UI/ui.module";
import { ADD_CHAT_MESSAGE, IAction } from "../store.module";

export function addChatMessage(value: IChatMessage): IAction {
  return { type: ADD_CHAT_MESSAGE, payload: value };
}
