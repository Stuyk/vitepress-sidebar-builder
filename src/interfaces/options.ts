export interface Options {
    /**
     * Is this section collapsible?
     * Default: `true`
     *
     * @type {boolean}
     * @memberof Options
     */
    collapsible?: boolean;

    /**
     * Does this section start as collapsed?
     * Default: `false`
     *
     * @type {boolean}
     * @memberof Options
     */
    collapsed?: boolean;

    /**
     * The name of this section.
     * Default: `The Folder Name`
     *
     * @type {string}
     * @memberof Options
     */
    sectionName?: string;

    /**
     * Certain file abbreviations to ignore.
     * If it's in this list it will not be added to the sidebar.
     *
     * Example: `_partial`
     *
     * @type {Array<string>}
     * @memberof Options
     */
    partialFileNamesToIgnore?: Array<string>;
}
