import React from "react";
import { NavBar } from "../components/ui/nav-bar";
import { NavTab } from "../components/ui/nav-tab";
import { PUBLICATIONS } from "../data/pubs";

import { Publications } from "../components/publications";
import { Intro } from "../components/intro";
import { HeroArea } from "../components/hero";
import { Fun } from "../components/fun";
import { Teaching } from "../components/teaching";

import { TEACHING } from "../data/teaching";
import { CONTACT } from "../data/contact";

const FEATURE_FLAGS = {
  enable_blogs: false,
};

export default function Home() {
  return (
    <main className="h-screen x-5 max-w-5xl m-auto">
      <NavBar>
        {FEATURE_FLAGS.enable_blogs && (
          <NavTab href="/blogs">
            <span data-cy="blogs-link">Blogs</span>
          </NavTab>
        )}
      </NavBar>

      <div className="px-5 pb-8 md:pt-0 flex flex-col md:justify-center items-center text-gray-700 dark:text-gray-300">
        <HeroArea contact={CONTACT} />
        <div className="max-w-2xl flex flex-col mt-2 gap-8">
          <Intro />
          <Publications
            pubs={PUBLICATIONS}
            selfName={CONTACT.academicName ?? CONTACT.titleName}
          />
          <Teaching info={TEACHING} />
          <Fun />
        </div>
      </div>
    </main>
  );
}
