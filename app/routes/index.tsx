import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Vinay Malankad - www.vinaymk.com",
  };
};
export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        textAlign: "center",
      }}
    >
      <h1>Hi! I'm Vinay M</h1>
      <p>I am a JavaScript developer from Singapore.</p>
    </div>
  );
}
