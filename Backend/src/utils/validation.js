export const emailRegex =
  /^(?!.*\.\.)[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.(com|org|net|edu|gov|in|co\.in|me|io)$/i;


export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d@$!%*?#&^()_+\-=\[\]{};':"\\|,.<>\/?]{8,20}$/;