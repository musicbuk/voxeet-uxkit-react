import { combineReducers } from 'redux'
import ErrorReducer from './ErrorReducer'
import ConferenceReducer from './ConferenceReducer'
import TimerReducer from './TimerReducer'
import ControlsReducer from './ControlsReducer'
import InputManagerReducer from './InputManagerReducer'
import OnBoardingMessageReducer from './OnBoardingMessageReducer'
import OnBoardingMessageWithActionReducer from './OnBoardingMessageWithActionReducer'
import ParticipantsReducer from './ParticipantsReducer'
import ParticipantsWaitingReducer from './ParticipantsWaitingReducer'
import ActiveSpeakerReducer from './ActiveSpeakerReducer'

const reducers = combineReducers({
    error: ErrorReducer,
    conference: ConferenceReducer,
    inputManager: InputManagerReducer,
    onBoardingMessage: OnBoardingMessageReducer,
    onBoardingMessageWithAction: OnBoardingMessageWithActionReducer,
    timer: TimerReducer,
    controls: ControlsReducer,
    participants: ParticipantsReducer,
    participantsWaiting: ParticipantsWaitingReducer,
    activeSpeaker: ActiveSpeakerReducer,
})

export default reducers
