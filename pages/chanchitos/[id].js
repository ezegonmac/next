import useIsMounted from "../../hooks/useIsMounted"

const ChanchitoDinamico = () => {
    const isMounted = useIsMounted()

    // console.log({ router }, router.query)
    // ==  NO HACER  ==
    // if(router.isReady) {
    //     return null
    // }

    if(!isMounted) {
        return null
    }
    return (
        <div>
            <p>Chanchito dinamico</p>
        </div>
    )
}

export default ChanchitoDinamico