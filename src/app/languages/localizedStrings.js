import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    noPstnNumbers: "There is no PSTN numbers...",
    electronloading: "Musicbuk Meet is loading, please wait",
    error: "Error",
    errorPermissionDeniedMicrophone:
      "An error occured when joining the conference. Please make sure to allow access to your microphone.",
    errorPermissionDeniedMicrophoneCamera:
      "An error occured when joining the conference. Please make sure to allow access to your microphone and camera. Check if there’s another application using your camera and microphone",
    errorIE11:
      "A plugin is mandatory for IE11, please download and install the plugin. When the installation is complete, please refresh this page.",
    titleNotAllowedError:'Access to media devices not granted',
    descNotAllowedError: 'When access to device is requested, you should see a one-time pop-up window requesting the user to grant access to media devices. You can use it to allow or forbid access to requested device. Please, refer to the browser-specific instructions for enabling access to the media devices.',
    titleOverconstrainedError:'Device does not match the hardware requirements of this application',
    descOverconstrainedError: 'Please use use the settings menu to try to select another device.',
    titleNotFoundError:'Device with requested media not found',
    descNotFoundError: 'Please check are all devices connected properly.',
    titleAbortError:'Device is not working',
    descAbortError: 'Please check is device connected properly or use the settings menu to try to select another device.',
    titleNotReadableError:'Could not access the device',
    descNotReadableError: 'Please check is any other application using the device  or use the settings menu to try to select another device.',
    titleSecurityError:'Media support is disabled',
    descSecurityError: '',
    titleTypeError:'Internal error',
    descTypeError: 'Error has been logged. Sorry for inconvenience.',
    titleAlreadyStartedWarning:'Media is already started',
    descAlreadyStartedWarning: '',
    titleAlreadyStoppedWarning:'Media already stopped',
    descAlreadyStoppedWarning: '',
    titleNetworkConnectionError:'Network connection error',
    titleCallSetupError:'Call Setup Error',
    titleProgramError:'Program Error',
    titleSystemError:'System Error',
    titleConferenceCapacityError:'Unable to join the conference.',
    descConferenceCapacityError:'Conference is at the maximum capacity and is not accepting new participants.',
    descPeerConnectionFailedError: 'Your computer cannot connect to the communications platform, check your network setup, and try again. ' +
        'If the problem persists, contact your app provider for help.',
    descPeerConnectionDisconnectedError: 'There was a temporary network glitch that may have affected your call, if the problem persists please disconnect and rejoin.',
    descPeerNotFoundError: 'Connection to server could not be established. Please check your network connection.',
    descRemoteDescriptionError: 'The system was unable to set up your call due to a call negotiation failure. ' +
        'If you are using a mobile device, it might be a model that is not supported. ' +
        'Contact your app provider for help.',
    descCreateAnswerError: 'The system was unable to set up your call due to a call negotiation failure. Contact your app provider for help.',
    descParticipantNotFoundError: 'The system was unable to find the participant in your call. ' +
        'Contact your app provider for help.',
    titleDefaultError:'Failed accessing microphone or camera',
    descDefaultError: 'Please check is device connected properly or use the settings menu to try to select another device.',
    browerNotSupported: "This browser is currently not supported.",
    installExtension: "Please install the screen share extension with this ",
    noExtensionAvailable: "No Chrome Web Extension configure for screen share.",
    microphoneOff: "Your microphone is muted.",
    microphoneOn: "Your microphone is on.",
    cameraOn: "Your camera is on.",
    cameraOff: "Your camera is off.",
    recordConferenceStart: "Your conference is being recorded.",
    recordConferenceStop: "Your conference is no longer recorded.",
    screenshareInProgress:
      "You cannot screenshare while another user is screensharing.",
    recordConferenceStartBy: "Your conference is being recorded by ",
    recordConferenceStopBy: "Your conference is no longer recorded by ",
    conferenceAlreadyRecord:
      "Your conference is already being recorded by an other attendee.",
    leave: "End",
    audio: "3D Audio",
    audioTitle: "Audio",
    chat: "Chat",
    nameConversation: "Name this conversation",
    externalLive: "Live Broadcast",
    fullscreen: "FullScreen",
    minimize: "Minimize",
    mute: "Mute",
    displaymode: "Display mode",
    pincode: "Call-in",
    sendMessage: "Send",
    pinCodeExplanations:
      "Call this number below and provide the conference pin code to join the conference via PSTN.",
    record: "Record",
    shareAlreadyStarted:
      "Someone is already sharing. Please stop it before start a new one.",
    share: "Share",
    screenshare: "Share Screen",
    screenshareEntireScreen: "Share Entire Screen",
    screenshareAWindow: "Share a Window",
    screenshareOption: "Share Options",
    settings: "Settings",
    open: "Open",
    close: "Close",
    video: "Video",
    camera: "Camera",
    audioTransparentMode: "Audio transparency mode",
    liveCall: "Live is running",
    linkHls: "See your live",
    broadcastLive: "Diffusion en cours",
    externalUrl: "Configure your stream",
    externalPassword: "Enter your password from your live",
    launchLive: "Start your stream",
    stopLive: "Stop your live stream",
    geturl: "Get your stream url (on Youtube or Facebook)",
    getpwd: "Get your stream password (on Youtube or Facebook)",
    enterhere: "Enter your informations here :",
    titleSettings: "Set preferred camera and microphone",
    titleSettingsListenerOnly: "Set preferred output device",
    problemSettings: "If you are having problems, try restarting your browser.",
    saveSettings: "Your preferences will automatically save.",
    screensharerunning: "Happy Screen Sharing!",
    tile: "Tile",
    list: "List",
    speaker: "Speaker",
    changelayout: "Change layout",
    attendees: "Attendees",
    participantsHeder: "Participants ",
    invitedHeder: "Invited",
    here: "here",
    hangtight: "We're waiting for other callers to arrive.",
    join: "Join",
    incall: "In call with :",
    joincall: "Join Call",
    expand: "Expand",
    activecall: "Active call",
    leavecall: "Leave call",
    output: "Output",
    input: "Input",
    titlePreConfig: "Set up your devices",
    addParticipant: "Add Participant",
    joined: "Joined",
    invited: "Waiting on",
    presenter: "Presenter",
    listener: "Listener",
    left: "Left",
    noAudioDevice:
      "No audio device detected. Please make sure to plug at least one microphone to access this conference.",
    filepresentation: "Share a File",
    prev: "Previous",
    next: "Next",
    errorFilePresentation:
      "An error occured during the file presentation. Please check your file.",
    videopresentation: "Share a Video",
    placeholderVideoPresentation: "Video URL",
    startVideoPresentationAutoplay: "Start video",
    invitedUsers: "Waiting for invitation",
    inviteUser: "Invite",
    autoPlayBlocked: "The browser has blocked automatic audio playback due to a security policy, proceed to start hearing audio from the conference",
    autoPlayBlockedButton: "Play audio",
    lowBandwidthMode: "Low bandwidth mode",
    sendMyVideo: "Send my video",
    showVideoParticipants1: "Show video for up to",
    showVideoParticipants2: "participants",
    pinnedCameraOff: "Click icon to always view video from this participant",
    pinnedCameraOn: "Click icon to only view video from this participant if he/she talked",
    bokehMode: "Bokeh mode",
  },
  fr: {
    noPstnNumbers: "Pas de numéro PSTN ...",
    electronloading: "Le client Musicbuk Meet va démarrer, veuillez patienter",
    error: "Erreur",
    errorPermissionDeniedMicrophone:
      "Une erreur est survenue lors de la connexion à la conference. Veuillez vérifier l'accès à votre microphone.",
    errorPermissionDeniedMicrophoneCamera:
      "Une erreur est survenue lors de la connexion à la conference. Veuillez vérifier l'accès à votre microphone et caméra.",
    errorIE11:
      "Une extension est nécéssaire pour utiliser IE11. Téléchargez et installez l'extension suivante. Lorsque l'installation est terminée, actualisez cette page.",
    browerNotSupported: "Ce navigateur n'est pas pris en charge.",
    installExtension: "Veuillez installer cette extension ",
    noExtensionAvailable:
      "Pas d'extension Chrome disponible pour le screenshare.",
    microphoneOff: "Votre microphone est muet.",
    microphoneOn: "Votre microphone est activé.",
    cameraOn: "Votre caméra est activée.",
    cameraOff: "Votre caméra est désactivée.",
    recordConferenceStart: "Votre conference est enregistrée.",
    recordConferenceStop: "Votre conference n'est plus enregistrée.",
    screenshareInProgress: "Un partage d'écran est déjà en cours.",
    recordConferenceStartBy: "Votre conference est enregistrée par ",
    recordConferenceStopBy: "Votre conference n'est plus enregistrée par ",
    conferenceAlreadyRecord:
      "Votre conference est déjà enregistrée par un autre participant.",
    leave: "Quitter",
    audio: "Son 3D",
    audioTitle: "Audio", // !!!
    chat: "Conversation",
    nameConversation: "Name this conversation", // !!!
    externalLive: "Diffusion direct",
    fullscreen: "Agrandir",
    minimize: "Reduire",
    mute: "Muet",
    list: "Liste",
    displaymode: "Mode d'affichage",
    speaker: "Locuteur",
    pincode: "Call-in",
    sendMessage: "Envoyer",
    pinCodeExplanations:
      "Appelez un numéro ci-dessous et renseignez le code de la conference pour rejoindre la conference via RTCP.",
    record: "Enregistrer",
    share: "Partager",
    shareAlreadyStarted:
      "Un partage est déja en cours, veuillez l'arrêter avant d'en commencer un nouveau.",
    screenshare: "Partage d'écran",
    screenshareEntireScreen: "Écran entier",
    screenshareAWindow: "Fenêtre du navigateur",
    screenshareOption: "Partage d'écran",
    settings: "Paramètres",
    open: "Ouvrir",
    close: "Fermer",
    video: "Video",
    camera: "Caméra",
    liveCall: "Conférence en cours",
    linkHls: "Voir la diffusion en direct",
    broadcastLive: "Diffusion en cours",
    externalUrl: "Entrez l'url de la diffusion en direct",
    externalPassword: "Entrez le mot de passe de la diffusion en direct",
    launchLive: "Lancer le direct",
    stopLive: "Arreter le direct",
    geturl: "Récupérez l'url de la diffusion en direct (Youtube ou Facebook)",
    getpwd: "Récupérez le mot de passe de la diffusion en direct",
    enterhere: "Entrez vos informations içi :",
    titleSettings: "Préférences caméra et microphone",
    problemSettings:
      "Si vous rencontrez des problèmes, veuillez essayer de redémarrer votre navigateur.",
    saveSettings: "Vos modifications seront automatiquement sauvegardées.",
    screensharerunning: "Partage d'écran en cours",
    displaymode: "Mode d'affichage",
    tile: "Tuile",
    list: "Liste",
    speaker: "Speaker",
    displaymode: "Display mode",
    changelayout: "Changer mode d'affichage",
    attendees: "Participants",
    participantsHeder: "Participants", // !!!
    invitedHeder: "Invited", // !!!
    here: "ici",
    hangtight: "Nous attendons d'autres participants.",
    join: "Rejoindre",
    incall: "En conférence avec :",
    joincall: "Rejoindre la conférence",
    expand: "Agrandir",
    activecall: "Conférence active",
    leavecall: "Quitter la conférence",
    output: "Sortie audio",
    input: "Entrée audio",
    titlePreConfig: "Configuration de vos périphériques",
    addParticipant: "Add Participant", // !!!
    presenter: "Participants",
    joined: "En conférence",
    invited: "En attente",
    presenter: "Présentateur",
    listener: "Auditeur",
    left: "Déconnecté",
    noAudioDevice:
      "Pas de microphone détécté. Veuillez vérifier d'avoir au moins un microphone branché pour accéder à la conférence.",
    filepresentation: "Partager un fichier",
    prev: "Précédent",
    next: "Suivant",
    errorFilePresentation:
      "Une erreur est survenue durant le partage de fichier. Veuillez vérifier votre fichier.",
    videopresentation: "Partager une vidéo",
    placeholderVideoPresentation: "URL de la vidéo",
    startVideoPresentationAutoplay: "Démarrer la video",
    invitedUsers: "En attente d'invitation",
    inviteUser: "Inviter",
    lowBandwidthMode: "Mode à faible bande passante",
    sendMyVideo: "Envoyez ma vidéo",
    showVideoParticipants1: "Afficher la vidéo jusqu'à",
    showVideoParticipants2: "participants",
    pinnedCameraOff: "Cliquez sur l'icône pour toujours voir la vidéo de ce participant",
    pinnedCameraOn: "Cliquez sur l'icône pour afficher la vidéo de ce participant uniquement s'il a parlé"
  }
});
