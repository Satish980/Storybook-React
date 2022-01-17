import React from "react";
import Input from "./Input";

export default{
    title: 'form/Input',
    componenet: Input
}

export const medium = () => <Input variant="medium" children="Medium"/>
export const small = () => <Input variant='small' children="Small"/>
export const large = () => <Input variant='large' children='Large'/>

small.storyName = 'Small Input'