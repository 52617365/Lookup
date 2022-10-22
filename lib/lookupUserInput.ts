function lookUpModeIsInvalid(mode: string) {
    const allowedModes = ["all", "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"]
    return !allowedModes.includes(mode);
}

export default lookUpModeIsInvalid