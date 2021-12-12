import { Button } from "ui";
import { bigNumberToString } from "utils"

export default function Docs() {
  return (
    <div>
      <h1>Docs {bigNumberToString(10000000000)}</h1>
      <Button />
    </div>
  );
}
