import { useContext } from "react";
import { MediaContext } from "../context";

export default function useMedia() {
  const { media, setMedia } = useContext(MediaContext);
  return { media, setMedia };
}
