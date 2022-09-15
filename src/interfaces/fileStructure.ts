export interface FileStructure {
    /**
     * The name of this file obtained from front matter.
     *
     * @type {string}
     * @memberof FileStructure
     */
    text: string;

    /**
     * The link to this file.
     *
     * @type {string}
     * @memberof FileStructure
     */
    link: string;

    /**
     * The order of this file.
     *
     * @type {string}
     * @memberof FileStructure
     */
    order: number;
}
