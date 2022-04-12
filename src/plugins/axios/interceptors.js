function setParams(config) {
    const params = config.params || {}
    config.params = Object.assign(params, {
        apikey: "1012e55f",
        plot: "full",
    })
    return config
}

function returnData(res) {
    return res.data
}

export default function (axios) {
    axios.interceptors.request.use(setParams)
    axios.interceptors.response.use(returnData)
}
