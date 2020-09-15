import {Api, AuthType, Request} from "./domain/Api";


let a = new Api()
a.request = new Request()
a.request.auth = {type: AuthType.BASIC_AUTH, value: [{name:"abc"}]}
a.request.url = 's'
a.request.queries = [{name: "xxx", desc: "地址"}]
a.request.queries.push({name: "xxx", need: true})

// a.request = {uri:'a'}
console.log(a)
