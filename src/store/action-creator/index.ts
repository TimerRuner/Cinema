import * as CinemaCreators from "./cinema"
import * as BgCreators from "./bg"
import * as AlertCreators from "./alert"

export default {
    ...CinemaCreators,
    ...BgCreators,
    ...AlertCreators,
}
