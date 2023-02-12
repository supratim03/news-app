import React from "react";
import PropTypes from 'prop-types'
import { ArticleBlock, ArticleBody, ArticleContainer, BodyBlock, Headline, HeadlineBlock, PublicationDateBlock, TextBlock, Thumbnail, Title } from "./ArticleDetailStyled";
const ArticleDetailComponent = ({ articleDetail }) => {

    const getTextBodies = articleDetail?.blocks && articleDetail?.blocks?.body.map((text, index) => {
        return (
            <div key={text.id}>
                <p>{text.bodyTextSummary}</p>
            </div>

        )
    })
    return (
        <ArticleContainer>
            <PublicationDateBlock>
                <span>{articleDetail?.webPublicationDate}</span>
            </PublicationDateBlock>
            <ArticleBlock>
                <Title>
                    {articleDetail?.webTitle}
                </Title>
            </ArticleBlock>
            <HeadlineBlock>
                <Headline>
                    {articleDetail?.fields?.headline}
                </Headline>
            </HeadlineBlock>
            <hr />
            <ArticleBody>
                <BodyBlock>
                    <TextBlock>
                        {getTextBodies}
                    </TextBlock>
                    
                    {articleDetail?.fields?.thumbnail && <div><Thumbnail imgUrl={articleDetail?.fields?.thumbnail} /></div>}
                </BodyBlock>
                
            </ArticleBody>
        </ArticleContainer>
    )
}

ArticleDetailComponent.propTypes = {
    articleDetail: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ArticleDetailComponent;