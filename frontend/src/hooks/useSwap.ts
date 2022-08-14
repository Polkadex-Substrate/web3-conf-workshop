import { ApiPromise } from "@polkadot/api"
import { signAndSendExtrinsic } from "helpers/signAndSend"
import { alertPush, selectRangerApi, selectUserInfo, User } from "modules"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useReduxSelector } from "./useReduxSelector"

export const useSwap=()=>{
    const api = useReduxSelector(selectRangerApi)
    const user = useReduxSelector(selectUserInfo)
    const [loading, setLoading] = useState(false)
    const dispatch= useDispatch()
    
    const swapPDEX = async (amount: string) => {
        try {
            setLoading(true)
            const res= await createAndSendSwap(api, user, BigInt(amount) * BigInt(10 ** 12))
            if (res.isSuccess) {
                dispatch(alertPush({
                    type: "Successful",
                    message: {
                        title: "Swap success!",
                        description: "swap executed successfully on the blockchain"
                    }
                }))
            }
        } catch (e) {
            dispatch(alertPush({
                type: "Error",
                message: {
                    title: "Swap failed",
                    description: e.message
                }
            }))
        } finally {
            setLoading(false)
        }
    }
    return {
        swapPDEX,
        loading
    }
}

const createAndSendSwap = async (api: ApiPromise, user: User, amount: bigint) => {
    //TODO: implement swapPDEX
    const ext = api.tx.templateModule.swap(amount)
    const res = await signAndSendExtrinsic(api, ext, user.injector, user.address, true)
    return res
}