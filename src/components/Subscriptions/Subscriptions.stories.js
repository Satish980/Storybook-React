import React from "react";
import { primary as Primary } from "../Button/Button.stories";
import { large as Large } from "../Input/Input.stories";

export default{
    title:'Form/Subscriptions'
}

export const PrimarySubscription = () => (
    <>
        <Large/>
        <Primary/>
    </>
)