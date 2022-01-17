import React from "react";
import Button from "./Button";
// import Center from "../Center/Center";

export default{
    title: 'Form/Button',
    component: Button,
    argTypes: {
        onClick:{action: 'Clicked'}
    }
    // decorators: [story => <Center>{story()}</Center>]

}

export const primary = () => <Button variant='primary'>Primary</Button>
export const secondary = () => <Button variant='secondary'>Secondary</Button>
export const success = () => <Button variant='success'>Success</Button>
export const danger = () => <Button variant='danger' onClick={()=> console.log('Danger Button Cliked')}>Danger</Button>


// args mechanism
const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

// export const LongPrimaryA = Template.bind({})
// LongPrimaryA = {
//     ...PrimaryA.args,
//     children: 'Long Primary Args'
// }

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant : 'secondary',
    children : 'Secondary Args'
}