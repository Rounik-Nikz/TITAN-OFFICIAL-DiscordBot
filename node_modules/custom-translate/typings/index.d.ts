type KVObject = { [name: string]: string };

declare function wordTrans(text: string, dict: KVObject, join?: any);
declare function letterTrans(text: string, dict: KVObject, join?: any);
declare function regexTrans(text: string, dict: KVObject, flags?: string);

export = {
	version: string,
	wordTrans: wordTrans,
	letterTrans: letterTrans,
	regexTrans: regexTrans
};
