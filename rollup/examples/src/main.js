import { externalDependen } from './external'

export default () => {
    console.log("I'm Hua Yang.")

    externalDependen()

    import('../package.json').then(({ version }) => console.log(version))
}