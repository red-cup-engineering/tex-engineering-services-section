import { type TexPlate } from "./schema.mjs";
import { type TexPlateFormat } from "./syntax.mjs";
export type DecodeTexPlateOptions = Readonly<{
    source?: string;
    format?: TexPlateFormat;
}>;
/** Admit generic TeX-family source text as a file plate, not as a runtime run. */
export declare function decodeTexPlate(text: string, options?: DecodeTexPlateOptions): TexPlate;
