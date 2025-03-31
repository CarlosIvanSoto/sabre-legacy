export interface ApplicationResults {
  error?: {
    systemSpecificResults?: {
      message: string
      shortText: string
    }
    type: string
    timeStamp: string
  },
  success: { 
    systemSpecificResults?: {
      hostCommad: { 
        content: string
        lNIATA: string
      }
    }
    timeStamp: string
  }
  status: string
}