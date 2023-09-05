import { SkeletonCircle, Skeleton, Card, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
    return (
        <Card direction={"row"} borderRadius="lg" margin="10px">
            <SkeletonCircle margin="5px" />
            <SkeletonText noOfLines={2} mt={3} width={"50%"} />
        </Card>
    );
};

export default GenreSkeleton;
