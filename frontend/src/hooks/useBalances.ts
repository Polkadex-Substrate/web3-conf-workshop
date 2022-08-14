import { ApiPromise } from "@polkadot/api"
import { selectRangerApi, selectUserInfo } from "modules"
import { useEffect, useState } from "react"
import { formatToUnitStr } from "./formatUnit"
import { useReduxSelector } from "./useReduxSelector"

export const useBalances = (reRender:boolean) => {
    const api = useReduxSelector(selectRangerApi)
    const [pdexBalance, setPdexBalance] = useState('0');
    const [ethBalance, setEthBalance] = useState('0');
    const user = useReduxSelector(selectUserInfo);

    const fetchAndSetPdexBalances = async () => {
        if (api && user.address) {
            const dataRaw = await fetchPdexBalance(api, user.address);
            const data: any = dataRaw.toJSON()    
            data?.data?.free && setPdexBalance(formatToUnitStr(data?.data?.free))
        }
    }
    const fetchAndSetEthBalance = async () => {
        if (api && user.address) {
            const dataRaw = await fetchEthBalance(api, user.address);
            const data: any = dataRaw.toJSON()
            data?.balance && setEthBalance(formatToUnitStr(data?.balance))
        }
    }

    useEffect(() => {
        fetchAndSetPdexBalances()
        fetchAndSetEthBalance()
    },[user,api,reRender])

    return {
        pdexBalance,
        ethBalance
    }
}


const fetchEthBalance = async (api: ApiPromise, address: string) => {
    //TODO: implement this
    const dataRaw = await api.query.assets.account('1', address);
    const data: any = dataRaw.toJSON()
    return data?.balance
}

const fetchPdexBalance = async (api: ApiPromise, address: string) => {
    //TODO: implement this
    const dataRaw = await api.query.system.account(address);
    const data: any = dataRaw.toJSON()
    return data?.data?.free
}