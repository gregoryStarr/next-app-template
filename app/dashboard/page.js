import { Suspense } from "react";
import PostFeed from "./PostFeed";
import PostMenu from "./PostMenu";


export default function FirstPost() {
  <><h1>First Post!</h1>;
  <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostMenu />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <PostFeed />
      </Suspense>
    </section>
    </>
}

export function reportWebVitals(metric) {
  console.log(metric);
}
