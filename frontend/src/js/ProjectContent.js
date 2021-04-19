import React from 'react';
import {useEffect, useState} from 'react';
import {
  Link,
  useHistory,
  useLocation,
    useParams
} from "react-router-dom";
import { apiBase } from "./utils";
import { CopyBlock, github } from "react-code-blocks";
import File from './icons/file.svg';
import Dir from './icons/folder.svg';
import fstyle from '../css/framestyle.css'
import pcstyle from '../css/projectcontent.css'
import {TopBar} from "./TopBar";



const fileMap = {
    '.adap' : 'adap',
    '.as' : 'actionscript',
    '.adb' : 'ada',
    '.ads' : 'ada',
    '.ino' : 'arduino',
    '.a3x' : 'autoit',
    '.c' : 'c',
    '.clj' : 'clojure',
    '.cs' : 'cs',
    '.cpp' : 'cpp',
    '.hpp' : 'cpp',
    '.coffee' : 'coffeescript',
    '.css' : 'css',
    '.cu' : 'cuda',
    '.html' : 'html',
    '.java' : 'java',
    '.js' : 'javascript',
    '.json' : 'json',
    '.jsx' : 'jsx',
    '.ltx' : 'latex',
    '.tex' : 'latex',
    '.ls' : 'livescript',
    '.lua' : 'lua',
    '.l' : 'lisp',
    'makefile' : 'makefile',
    '.pl' : 'perl',
    '.php' : 'php',
    '.py' : 'python',
    '.r' : 'r',
    '.sql' : 'sql',
    '.sass' : 'sass',
    '.rb' : 'ruby',
    '.txt' : 'text',
    '.ts' : 'typescript',
    '.tsx' : 'typescript',
    '.xml' : 'xml'
}

const link = {
    color: "#0366d6",
    wordBreak: "break-all",
    fontSize: "22px",
    font: "sans serif",


}


function ProjectContent () {
    // let location = useLocation();
    let {name} = useParams();
    let apipath = apiBase + name;
    const [currDir, setCurrDir] = useState("");
    const [fileContent, setFileContent] = useState("");
    const [dirList, setDirList] = useState([]);
    const [fileExt, setFileExt] = useState("");
    const [filePath, setFilePath] = useState("");
    const [types, setTypes] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const fetchURL = apipath;
        fetch(fetchURL)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.images) {
                        setDirList(result.images.map(path => path));
                        setFilePath(result.filePath);
                        setTypes(result.types)
                    }
                    if (result.fileContent) {
                        let ext = fileMap[result.fileExt];
                        setFilePath(result.filePath);
                        setFileExt(ext);
                        setDirList([]);
                        setFileContent(result.fileContent.join(''));
                        // console.log(fileContent);
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [location]);

    return (
        <div>
            <div className={fstyle.outerBox}>
                <TopBar/>
                {dirList.length > 0
                    ? <div className={pcstyle.innerBox}>
                        <h1>
                            <Link to={""} className={pcstyle.titlePath}>
                                {"RMichael"}
                            </Link>
                            {
                                filePath.split("/").map((currentelement, index) => {
                                    let newPath = filePath.split('/').slice(0, index + 1).join('/');
                                    return (
                                        <Link key={newPath} to={"/" + newPath} className={pcstyle.titlePath}>
                                            {"/" + currentelement}
                                        </Link>
                                    );
                                }
                                )
                            }
                        </h1>
                        <div className={pcstyle.table}>
                            <ol className={pcstyle.list}>
                                {dirList.map((currentelement, index) =>
                                    <Filedirtab key={name + currentelement}
                                                type={types[index]}
                                                path={currentelement}
                                                base={name}/>)
                                }
                            </ol>
                        </div>
                    </div>
                    : <>
                        <h1>
                            <Link to={""} className={pcstyle.titlePath}>
                                {"RMichael"}
                            </Link>
                            {
                                filePath.split("/").map((currentelement, index) => {
                                        let newPath = filePath.split('/').slice(0, index + 1).join('/');
                                        return (
                                            <Link key={newPath} to={"/" + newPath} className={pcstyle.titlePath}>
                                                {"/" + currentelement}
                                            </Link>
                                        );
                                    }
                                )
                            }
                        </h1>
                        <CopyBlock
                            text={fileContent}
                            language={fileExt}
                            showLineNumbers={true}
                            theme={github}
                            codeBlock
                        />;
                    </>}
            </div>
            <footer>

            </footer>
        </div>
    )
}

function Filedirtab(props) {
    return (
        <li className={pcstyle.listItem}>
            <div className={pcstyle.listItemInner}>
                {props.type === "file"
                    ?   <div className={pcstyle.icon}>
                         <img src={File} alt="React Logo" />
                        </div>
                    :  <div className={pcstyle.icon}>
                        <img src={Dir} alt="React Logo" />
                       </div>}
                <Link to={"/" + props.base + "/" + props.path} className={pcstyle.link}>
                {props.path}
                </Link>
            </div>
        </li>
    );
}

export {ProjectContent};
