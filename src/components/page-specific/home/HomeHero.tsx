import { Heading } from "@chakra-ui/react";
import React from "react"

type HomeHeroProps = {};

const HomeHero: React.FC<HomeHeroProps> = () => {
  return (
    <>
      <Heading as="h1">Hi I'm Omar</Heading>
    </>
  )
}

export { HomeHero };