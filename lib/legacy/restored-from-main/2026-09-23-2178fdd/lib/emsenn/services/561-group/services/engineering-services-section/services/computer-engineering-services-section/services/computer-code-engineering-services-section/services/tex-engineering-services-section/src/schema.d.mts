
export declare const texCommandSchema: {
    readonly $id: "metroplat/tex/command";
    readonly title: "TexCommand";
    readonly description: "A TeX command occurrence read from source text.";
    readonly type: "object";
    readonly required: readonly ["name", "line"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly argument: {
            readonly type: "string";
        };
        readonly line: {
            readonly type: "integer";
            readonly minimum: 1;
        };
    };
};
export type TexCommand = FromJsonSchema<typeof texCommandSchema>;
export declare const texCommandContract: any;
export declare const texEnvironmentSchema: {
    readonly $id: "metroplat/tex/environment";
    readonly title: "TexEnvironment";
    readonly description: "A TeX environment occurrence read from source text.";
    readonly type: "object";
    readonly required: readonly ["name", "line"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly title: {
            readonly type: "string";
        };
        readonly line: {
            readonly type: "integer";
            readonly minimum: 1;
        };
    };
};
export type TexEnvironment = FromJsonSchema<typeof texEnvironmentSchema>;
export declare const texEnvironmentContract: any;
export declare const texDependencySchema: {
    readonly $id: "metroplat/tex/dependency";
    readonly title: "TexDependency";
    readonly description: "A textual dependency edge declared by a TeX-family plate.";
    readonly type: "object";
    readonly required: readonly ["kind", "target", "command", "line"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly kind: {
            readonly enum: readonly ["input", "include", "import", "package", "bibliography", "uses"];
        };
        readonly target: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly command: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly line: {
            readonly type: "integer";
            readonly minimum: 1;
        };
    };
};
export type TexDependency = FromJsonSchema<typeof texDependencySchema>;
export declare const texDependencyContract: any;
export declare const texLabelSchema: {
    readonly $id: "metroplat/tex/label";
    readonly title: "TexLabel";
    readonly description: "A stable label declared by a TeX-family plate.";
    readonly type: "object";
    readonly required: readonly ["name", "line"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly line: {
            readonly type: "integer";
            readonly minimum: 1;
        };
    };
};
export type TexLabel = FromJsonSchema<typeof texLabelSchema>;
export declare const texLabelContract: any;
export declare const texReferenceSchema: {
    readonly $id: "metroplat/tex/reference";
    readonly title: "TexReference";
    readonly description: "A reference from one TeX-family plate occurrence to another named label.";
    readonly type: "object";
    readonly required: readonly ["target", "command", "line"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly target: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly command: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly line: {
            readonly type: "integer";
            readonly minimum: 1;
        };
    };
};
export type TexReference = FromJsonSchema<typeof texReferenceSchema>;
export declare const texReferenceContract: any;
export declare const texPlateSchema: {
    readonly $id: "metroplat/tex/plate";
    readonly title: "TexPlate";
    readonly description: "A TeX-family file admitted as a textual plate, before any engine or app runtime acts on it.";
    readonly type: "object";
    readonly required: readonly ["kind", "source", "format", "commands", "environments", "dependencies", "labels", "references"];
    readonly additionalProperties: false;
    readonly properties: {
        readonly kind: {
            readonly const: "metroplat.tex.plate";
        };
        readonly source: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly format: {
            readonly enum: readonly ["generic-tex", "blueprint-tex", "verso-tex"];
        };
        readonly commands: {
            readonly type: "array";
            readonly items: {
                readonly $id: "metroplat/tex/command";
                readonly title: "TexCommand";
                readonly description: "A TeX command occurrence read from source text.";
                readonly type: "object";
                readonly required: readonly ["name", "line"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly argument: {
                        readonly type: "string";
                    };
                    readonly line: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                };
            };
        };
        readonly environments: {
            readonly type: "array";
            readonly items: {
                readonly $id: "metroplat/tex/environment";
                readonly title: "TexEnvironment";
                readonly description: "A TeX environment occurrence read from source text.";
                readonly type: "object";
                readonly required: readonly ["name", "line"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly line: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                };
            };
        };
        readonly dependencies: {
            readonly type: "array";
            readonly items: {
                readonly $id: "metroplat/tex/dependency";
                readonly title: "TexDependency";
                readonly description: "A textual dependency edge declared by a TeX-family plate.";
                readonly type: "object";
                readonly required: readonly ["kind", "target", "command", "line"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly kind: {
                        readonly enum: readonly ["input", "include", "import", "package", "bibliography", "uses"];
                    };
                    readonly target: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly command: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly line: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                };
            };
        };
        readonly labels: {
            readonly type: "array";
            readonly items: {
                readonly $id: "metroplat/tex/label";
                readonly title: "TexLabel";
                readonly description: "A stable label declared by a TeX-family plate.";
                readonly type: "object";
                readonly required: readonly ["name", "line"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly line: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                };
            };
        };
        readonly references: {
            readonly type: "array";
            readonly items: {
                readonly $id: "metroplat/tex/reference";
                readonly title: "TexReference";
                readonly description: "A reference from one TeX-family plate occurrence to another named label.";
                readonly type: "object";
                readonly required: readonly ["target", "command", "line"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly target: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly command: {
                        readonly type: "string";
                        readonly minLength: 1;
                    };
                    readonly line: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                };
            };
        };
        readonly mediaType: {
            readonly type: "string";
        };
    };
};
export type TexPlate = FromJsonSchema<typeof texPlateSchema>;
export declare const texPlateContract: any;
