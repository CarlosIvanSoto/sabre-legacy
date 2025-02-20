export interface ApplicationResults {
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