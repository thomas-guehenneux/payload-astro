import { Resource } from "sst";

export default function page() {
  return <div>{Resource.CMS.url}</div>;
}
