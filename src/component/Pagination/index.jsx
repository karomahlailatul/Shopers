import React from "react";
import { Pagination } from "react-bootstrap";

import { useSearchParams } from "react-router-dom";

export default function MyPagination({ total, current }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let keywordParam = searchParams.get("keyword");

    let sortParam = searchParams.get("sort") || "desc";
    let limitParam = searchParams.get("limit") || "24";

    // console.log(current)

    let items = [];
    if (current > 1) {
        items.push(
            <Pagination.Prev
                key="prev"
                onClick={(e) => {
                    if (keywordParam === null) {
                        setSearchParams({
                            sort: sortParam,
                            page: (current - 1),
                            limit: limitParam,
                        });
                    } else {
                        setSearchParams({
                            keyword: keywordParam,
                            sort: sortParam,
                            page: (current - 1),
                            limit: limitParam,
                        });
                    }
                }}
            />
        );
    }

    for (let page = 1; page <= total; page++) {
        items.push(
            <Pagination.Item key={page} data-page={page} value={page} active={page === current}
                onClick={(e) => {
                    if (keywordParam === null) {
                        setSearchParams({
                            sort: sortParam,
                            page: page,
                            limit: limitParam,
                        });
                    } else {
                        setSearchParams({
                            keyword: keywordParam,
                            sort: sortParam,
                            page: page,
                            limit: limitParam,
                        });
                    }
                }
                }>
                {page}
            </Pagination.Item>
        );
    }

    if (current < total) {
        items.push(<Pagination.Next key="next"
            onClick={(e) => {
                if (keywordParam === null) {
                    setSearchParams({
                        sort: sortParam,
                        page: (current + 1),
                        limit: limitParam,
                    });
                } else {
                    setSearchParams({
                        keyword: keywordParam,
                        sort: sortParam,
                        page: (current + 1),
                        limit: limitParam,
                    });
                }
            }}


        />);
    }

    return <Pagination size="lg">{items}</Pagination>;
}
