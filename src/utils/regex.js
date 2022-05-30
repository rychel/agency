export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

export const validSpecials = new RegExp(/[?,;.:/!§ù%*µ¨$\.\.|()=+-_}\]{[`@°&"\\^\.']/);

export const validChiffre = new RegExp(/[0-9]/);