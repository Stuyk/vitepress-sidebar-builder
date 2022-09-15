import { FileStructure } from './fileStructure';
import { Options } from './options';

export interface FolderStructure extends Pick<Options, 'collapsible' | 'collapsed'> {
    /**
     * The name of the folder.
     *
     * @type {string}
     * @memberof FolderStructure
     */
    text: string;

    /**
     * Items to show in this section.
     *
     * @type {Array<FileStructure>}
     * @memberof FolderStructure
     */
    items: Array<FileStructure>;
}
