import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreListSkeleton = () => {
    return (
        <HStack>
            <Skeleton boxSize='32px' borderRadius={8} />
            <SkeletonText width='100%' />
        </HStack>
    )
}

export default GenreListSkeleton
